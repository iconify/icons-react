# Icon components for React

This repository contains icon components for React for all 222 icon sets available on [Iconify](https://icon-sets.iconify.design/).

Each icon set is published in a separate branch of this repository, see list of branches below.

⚠️ This is an alternative repository. Main repository has moved to [GitLab](https://gitlab.com/iconify-icons/react).

## Why not NPM ???

Due to NPM issues, these packages cannot be published to NPM.

### Large package.json

Each package exports many icons, some have tens of thousands of exports.

Dumping so many files to a root directory is not feasible. It leads to installation errors on some file systems, usually on Windows.

Alternative is to split components into multiple sub-directories and add `exports` field to `package.json`, which is how these packages are generated.

That leads to large `package.json` files, which works without issues with all modern tools.


### NPM issue

NPM stores metadata for each published package in a single file. That includes entire contents of `package.json`, including `exports` field, for all versions of that package.

When a package has many versions, each with large `exports` field, that quickly leads to massive metadata.

NPM has a limit of 100mb per package. When that limit is hit, NPM prevents new versions from being published, while also preventing developer from unpublishing old versions of that package.

Unfortunately, a couple of packages have reached that limit, which prevented packages from being updated on NPM.


### Solution

So new versions of some packages cannot be published, old versions cannot be unpublished. It is a mess that cannot be solved on NPM.

The only solution is to move off NPM.

This is why these packages are published to Git repository instead of NPM.

NPM client can install packages from a branch of a Git repository, where it retrieves metadata only for the latest commit in a branch, so no more huge metadata regardless of how many versions have been published.

Each icon set is published in a separate branch of this repository, which makes it easy to maintain many icon sets without creating multiple repositories. Also you can see what has changed in each update in commit diffs.


## Installation

```bash
npm install gitlab:iconify-icons/react#{prefix}
```

or
```bash
npm install github:iconify/icons-react#{prefix}
```

where {prefix} is icon set prefix.

For example, for `mdi` icon set, installation command is:

```bash
npm install gitlab:iconify-icons/react#mdi
```

or
```bash
npm install github:iconify/icons-react#mdi
```


## Usage

For full documentation visit [Iconify website](https://iconify.design/docs/usage/svg-css/react/).

Additionally you can find usage examples in README.md files in each branch of this repository.

## Icon sets

There are 222 branches in this repository, one for each icon set.

### Material

- [#material-symbols](https://github.com/iconify/icons-react/tree/material-symbols): **Material Symbols** (15717 icons, Apache 2.0)
- [#material-symbols-light](https://github.com/iconify/icons-react/tree/material-symbols-light): **Material Symbols Light** (15782 icons, Apache 2.0)
- [#ic](https://github.com/iconify/icons-react/tree/ic): **Google Material Icons** (10955 icons, Apache 2.0)
- [#mdi](https://github.com/iconify/icons-react/tree/mdi): **Material Design Icons** (7447 icons, Apache 2.0)
- [#mdi-light](https://github.com/iconify/icons-react/tree/mdi-light): **Material Design Light** (284 icons, Open Font License)
- [#line-md](https://github.com/iconify/icons-react/tree/line-md): **Material Line Icons** (1218 icons, MIT)

### UI 24px

- [#solar](https://github.com/iconify/icons-react/tree/solar): **Solar** (8706 icons, CC BY 4.0)
- [#tabler](https://github.com/iconify/icons-react/tree/tabler): **Tabler Icons** (6220 icons, MIT)
- [#iconmind](https://github.com/iconify/icons-react/tree/iconmind): **IconMind** (31722 icons, MIT)
- [#boxicons](https://github.com/iconify/icons-react/tree/boxicons): **Boxicons** (3768 icons, MIT)
- [#mingcute](https://github.com/iconify/icons-react/tree/mingcute): **MingCute Icon** (3320 icons, Apache 2.0)
- [#keyline-icons](https://github.com/iconify/icons-react/tree/keyline-icons): **Keyline Icons** (9424 icons, MIT)
- [#ri](https://github.com/iconify/icons-react/tree/ri): **Remix Icon** (3188 icons, Apache 2.0)
- [#mynaui](https://github.com/iconify/icons-react/tree/mynaui): **Myna UI Icons** (2620 icons, MIT)
- [#griddy-icons](https://github.com/iconify/icons-react/tree/griddy-icons): **Griddy Icons** (2010 icons, MIT)
- [#iconamoon](https://github.com/iconify/icons-react/tree/iconamoon): **IconaMoon** (1781 icons, CC BY 4.0)
- [#iconoir](https://github.com/iconify/icons-react/tree/iconoir): **Iconoir** (1671 icons, MIT)
- [#lucide](https://github.com/iconify/icons-react/tree/lucide): **Lucide** (1856 icons, ISC)
- [#lucide-lab](https://github.com/iconify/icons-react/tree/lucide-lab): **Lucide Lab** (373 icons, ISC)
- [#uil](https://github.com/iconify/icons-react/tree/uil): **Unicons** (1215 icons, Apache 2.0)
- [#tdesign](https://github.com/iconify/icons-react/tree/tdesign): **TDesign Icons** (2356 icons, MIT)
- [#si](https://github.com/iconify/icons-react/tree/si): **Sargam Icons** (1299 icons, MIT)
- [#majesticons](https://github.com/iconify/icons-react/tree/majesticons): **Majesticons** (760 icons, MIT)
- [#gg](https://github.com/iconify/icons-react/tree/gg): **css.gg** (704 icons, MIT)
- [#flowbite](https://github.com/iconify/icons-react/tree/flowbite): **Flowbite Icons** (751 icons, MIT)
- [#vadivam](https://github.com/iconify/icons-react/tree/vadivam): **Vadivam** (508 icons, MIT)
- [#basil](https://github.com/iconify/icons-react/tree/basil): **Basil** (493 icons, CC BY 4.0)
- [#pixelarticons](https://github.com/iconify/icons-react/tree/pixelarticons): **Pixelarticons** (1036 icons, MIT)
- [#pixel](https://github.com/iconify/icons-react/tree/pixel): **Pixel Icon** (578 icons, CC BY 4.0)
- [#akar-icons](https://github.com/iconify/icons-react/tree/akar-icons): **Akar Icons** (454 icons, MIT)
- [#ci](https://github.com/iconify/icons-react/tree/ci): **coolicons** (442 icons, CC BY 4.0)
- [#proicons](https://github.com/iconify/icons-react/tree/proicons): **ProIcons** (544 icons, MIT)
- [#typcn](https://github.com/iconify/icons-react/tree/typcn): **Typicons** (336 icons, CC BY-SA 4.0)
- [#meteor-icons](https://github.com/iconify/icons-react/tree/meteor-icons): **Meteor Icons** (409 icons, MIT)
- [#prime](https://github.com/iconify/icons-react/tree/prime): **Prime Icons** (313 icons, MIT)
- [#circum](https://github.com/iconify/icons-react/tree/circum): **Circum Icons** (288 icons, Mozilla Public License 2.0)
- [#fe](https://github.com/iconify/icons-react/tree/fe): **Feather Icon** (255 icons, MIT)
- [#eos-icons](https://github.com/iconify/icons-react/tree/eos-icons): **EOS Icons** (253 icons, MIT)
- [#bitcoin-icons](https://github.com/iconify/icons-react/tree/bitcoin-icons): **Bitcoin Icons** (330 icons, MIT)
- [#humbleicons](https://github.com/iconify/icons-react/tree/humbleicons): **Humbleicons** (286 icons, MIT)
- [#uim](https://github.com/iconify/icons-react/tree/uim): **Unicons Monochrome** (298 icons, Apache 2.0)
- [#uit](https://github.com/iconify/icons-react/tree/uit): **Unicons Thin Line** (216 icons, Apache 2.0)
- [#uis](https://github.com/iconify/icons-react/tree/uis): **Unicons Solid** (190 icons, Apache 2.0)
- [#gridicons](https://github.com/iconify/icons-react/tree/gridicons): **Gridicons** (207 icons, GPL 2.0)
- [#mi](https://github.com/iconify/icons-react/tree/mi): **Mono Icons** (180 icons, MIT)
- [#cuida](https://github.com/iconify/icons-react/tree/cuida): **Cuida Icons** (182 icons, Apache 2.0)
- [#weui](https://github.com/iconify/icons-react/tree/weui): **WeUI Icon** (162 icons, MIT)
- [#duo-icons](https://github.com/iconify/icons-react/tree/duo-icons): **Duoicons** (91 icons, MIT)
- [#svg-spinners](https://github.com/iconify/icons-react/tree/svg-spinners): **SVG Spinners** (46 icons, MIT)
- [#reicon](https://github.com/iconify/icons-react/tree/reicon): **Reicon** (6590 icons, MIT)
- [#hugeicons](https://github.com/iconify/icons-react/tree/hugeicons): **Huge Icons** (6065 icons, MIT)
- [#lets-icons](https://github.com/iconify/icons-react/tree/lets-icons): **Lets Icons** (1528 icons, CC BY 4.0)
- [#streamline-ultimate](https://github.com/iconify/icons-react/tree/streamline-ultimate): **Ultimate free icons** (1999 icons, CC BY 4.0)
- [#streamline-plump](https://github.com/iconify/icons-react/tree/streamline-plump): **Plump free icons** (1499 icons, CC BY 4.0)
- [#streamline-sharp](https://github.com/iconify/icons-react/tree/streamline-sharp): **Sharp free icons** (1500 icons, CC BY 4.0)
- [#mage](https://github.com/iconify/icons-react/tree/mage): **Mage Icons** (1042 icons, Apache 2.0)
- [#stash](https://github.com/iconify/icons-react/tree/stash): **Stash Icons** (982 icons, MIT)
- [#lineicons](https://github.com/iconify/icons-react/tree/lineicons): **Lineicons** (606 icons, MIT)
- [#wordpress](https://github.com/iconify/icons-react/tree/wordpress): **WordPress Icons** (345 icons, GPL)
- [#icon-park-outline](https://github.com/iconify/icons-react/tree/icon-park-outline): **IconPark Outline** (2658 icons, Apache 2.0)
- [#icon-park-solid](https://github.com/iconify/icons-react/tree/icon-park-solid): **IconPark Solid** (1947 icons, Apache 2.0)
- [#icon-park-twotone](https://github.com/iconify/icons-react/tree/icon-park-twotone): **IconPark TwoTone** (1944 icons, Apache 2.0)
- [#jam](https://github.com/iconify/icons-react/tree/jam): **Jam Icons** (940 icons, MIT)
- [#streamline-cyber](https://github.com/iconify/icons-react/tree/streamline-cyber): **Cyber free icons** (500 icons, CC BY 4.0)
- [#guidance](https://github.com/iconify/icons-react/tree/guidance): **Guidance** (360 icons, CC BY 4.0)
- [#bx](https://github.com/iconify/icons-react/tree/bx): **BoxIcons v2** (814 icons, MIT)
- [#bxs](https://github.com/iconify/icons-react/tree/bxs): **BoxIcons v2 Solid** (665 icons, MIT)

### UI 16px / 32px

- [#carbon](https://github.com/iconify/icons-react/tree/carbon): **Carbon** (2631 icons, Apache 2.0)
- [#ion](https://github.com/iconify/icons-react/tree/ion): **IonIcons** (1357 icons, MIT)
- [#famicons](https://github.com/iconify/icons-react/tree/famicons): **Famicons** (1342 icons, MIT)
- [#ant-design](https://github.com/iconify/icons-react/tree/ant-design): **Ant Design Icons** (848 icons, MIT)
- [#lsicon](https://github.com/iconify/icons-react/tree/lsicon): **Lsicon** (716 icons, MIT)
- [#gravity-ui](https://github.com/iconify/icons-react/tree/gravity-ui): **Gravity UI Icons** (799 icons, MIT)
- [#cil](https://github.com/iconify/icons-react/tree/cil): **CoreUI Free** (554 icons, CC BY 4.0)
- [#at-icons](https://github.com/iconify/icons-react/tree/at-icons): **@icons** (642 icons, MIT)
- [#ep](https://github.com/iconify/icons-react/tree/ep): **Element Plus** (293 icons, MIT)
- [#charm](https://github.com/iconify/icons-react/tree/charm): **Charm Icons** (261 icons, MIT)
- [#quill](https://github.com/iconify/icons-react/tree/quill): **Quill Icons** (140 icons, MIT)
- [#bytesize](https://github.com/iconify/icons-react/tree/bytesize): **Bytesize Icons** (101 icons, MIT)
- [#bi](https://github.com/iconify/icons-react/tree/bi): **Bootstrap Icons** (2078 icons, MIT)
- [#streamline-pixel](https://github.com/iconify/icons-react/tree/streamline-pixel): **Pixel free icons** (662 icons, CC BY 4.0)
- [#streamline-block](https://github.com/iconify/icons-react/tree/streamline-block): **Streamline Block** (300 icons, CC BY 4.0)
- [#rivet-icons](https://github.com/iconify/icons-react/tree/rivet-icons): **Rivet Icons** (210 icons, BSD 3-Clause)
- [#nimbus](https://github.com/iconify/icons-react/tree/nimbus): **Nimbus** (140 icons, MIT)
- [#formkit](https://github.com/iconify/icons-react/tree/formkit): **FormKit Icons** (144 icons, MIT)

### UI Other / Mixed Grid

- [#fluent](https://github.com/iconify/icons-react/tree/fluent): **Fluent UI System Icons** (19876 icons, MIT)
- [#ph](https://github.com/iconify/icons-react/tree/ph): **Phosphor** (9072 icons, MIT)
- [#glyphs](https://github.com/iconify/icons-react/tree/glyphs): **Glyphs** (3452 icons, MIT)
- [#glyphs-poly](https://github.com/iconify/icons-react/tree/glyphs-poly): **Glyphs Poly** (863 icons, MIT)
- [#teenyicons](https://github.com/iconify/icons-react/tree/teenyicons): **Teenyicons** (1200 icons, MIT)
- [#clarity](https://github.com/iconify/icons-react/tree/clarity): **Clarity** (1103 icons, MIT)
- [#streamline-freehand](https://github.com/iconify/icons-react/tree/streamline-freehand): **Freehand free icons** (1000 icons, CC BY 4.0)
- [#ix](https://github.com/iconify/icons-react/tree/ix): **Siemens Industrial Experience Icons** (1479 icons, MIT)
- [#octicon](https://github.com/iconify/icons-react/tree/octicon): **Octicons** (765 icons, MIT)
- [#memory](https://github.com/iconify/icons-react/tree/memory): **Memory Icons** (651 icons, Apache 2.0)
- [#system-uicons](https://github.com/iconify/icons-react/tree/system-uicons): **System UIcons** (430 icons, Unlicense)
- [#radix-icons](https://github.com/iconify/icons-react/tree/radix-icons): **Radix Icons** (332 icons, MIT)
- [#zondicons](https://github.com/iconify/icons-react/tree/zondicons): **Zondicons** (297 icons, MIT)
- [#uiw](https://github.com/iconify/icons-react/tree/uiw): **uiw icons** (214 icons, MIT)
- [#codex](https://github.com/iconify/icons-react/tree/codex): **CodeX Icons** (78 icons, MIT)
- [#ei](https://github.com/iconify/icons-react/tree/ei): **Evil Icons** (70 icons, MIT)
- [#heroicons](https://github.com/iconify/icons-react/tree/heroicons): **HeroIcons** (1288 icons, MIT)
- [#sidekickicons](https://github.com/iconify/icons-react/tree/sidekickicons): **SidekickIcons** (232 icons, MIT)
- [#pepicons-pop](https://github.com/iconify/icons-react/tree/pepicons-pop): **Pepicons Pop!** (1275 icons, CC BY 4.0)
- [#pepicons-print](https://github.com/iconify/icons-react/tree/pepicons-print): **Pepicons Print** (1275 icons, CC BY 4.0)
- [#pepicons-pencil](https://github.com/iconify/icons-react/tree/pepicons-pencil): **Pepicons Pencil** (1275 icons, CC BY 4.0)
- [#f7](https://github.com/iconify/icons-react/tree/f7): **Framework7 Icons** (1253 icons, MIT)
- [#pajamas](https://github.com/iconify/icons-react/tree/pajamas): **Gitlab SVGs** (410 icons, MIT)
- [#garden](https://github.com/iconify/icons-react/tree/garden): **Garden SVG Icons** (932 icons, Apache 2.0)
- [#streamline](https://github.com/iconify/icons-react/tree/streamline): **Streamline** (3000 icons, CC BY 4.0)
- [#streamline-flex](https://github.com/iconify/icons-react/tree/streamline-flex): **Flex free icons** (1500 icons, CC BY 4.0)
- [#fa7-solid](https://github.com/iconify/icons-react/tree/fa7-solid): **Font Awesome Solid** (2000 icons, CC BY 4.0)
- [#fa7-regular](https://github.com/iconify/icons-react/tree/fa7-regular): **Font Awesome Regular** (272 icons, CC BY 4.0)
- [#picon](https://github.com/iconify/icons-react/tree/picon): **Pico-icon** (824 icons, Open Font License)
- [#ooui](https://github.com/iconify/icons-react/tree/ooui): **OOUI** (421 icons, MIT)
- [#oui](https://github.com/iconify/icons-react/tree/oui): **OpenSearch UI** (437 icons, Apache 2.0)
- [#nrk](https://github.com/iconify/icons-react/tree/nrk): **NRK Core Icons** (637 icons, CC BY 4.0)
- [#dinkie-icons](https://github.com/iconify/icons-react/tree/dinkie-icons): **Dinkie Icons** (1198 icons, MIT)
- [#qlementine-icons](https://github.com/iconify/icons-react/tree/qlementine-icons): **Qlementine Icons** (905 icons, MIT)

### UI Multicolor

- [#streamline-ultimate-color](https://github.com/iconify/icons-react/tree/streamline-ultimate-color): **Ultimate color icons** (998 icons, CC BY 4.0)
- [#streamline-plump-color](https://github.com/iconify/icons-react/tree/streamline-plump-color): **Plump color icons** (1000 icons, CC BY 4.0)
- [#streamline-freehand-color](https://github.com/iconify/icons-react/tree/streamline-freehand-color): **Freehand color icons** (1000 icons, CC BY 4.0)
- [#streamline-kameleon-color](https://github.com/iconify/icons-react/tree/streamline-kameleon-color): **Kameleon color icons** (400 icons, CC BY 4.0)
- [#streamline-stickies-color](https://github.com/iconify/icons-react/tree/streamline-stickies-color): **Stickies color icons** (200 icons, CC BY 4.0)
- [#fluent-color](https://github.com/iconify/icons-react/tree/fluent-color): **Fluent UI System Color Icons** (890 icons, MIT)
- [#streamline-color](https://github.com/iconify/icons-react/tree/streamline-color): **Streamline color** (2000 icons, CC BY 4.0)
- [#streamline-flex-color](https://github.com/iconify/icons-react/tree/streamline-flex-color): **Flex color icons** (1000 icons, CC BY 4.0)
- [#streamline-sharp-color](https://github.com/iconify/icons-react/tree/streamline-sharp-color): **Sharp color icons** (1000 icons, CC BY 4.0)
- [#streamline-cyber-color](https://github.com/iconify/icons-react/tree/streamline-cyber-color): **Cyber color icons** (500 icons, CC BY 4.0)
- [#icon-park](https://github.com/iconify/icons-react/tree/icon-park): **IconPark** (2658 icons, Apache 2.0)
- [#marketeq](https://github.com/iconify/icons-react/tree/marketeq): **Marketeq** (590 icons, MIT)

### Programming

- [#vscode-icons](https://github.com/iconify/icons-react/tree/vscode-icons): **VSCode Icons** (1610 icons, MIT)
- [#codicon](https://github.com/iconify/icons-react/tree/codicon): **Codicons** (653 icons, CC BY 4.0)
- [#material-icon-theme](https://github.com/iconify/icons-react/tree/material-icon-theme): **Material Icon Theme** (904 icons, MIT)
- [#file-icons](https://github.com/iconify/icons-react/tree/file-icons): **File Icons** (930 icons, ISC)
- [#devicon](https://github.com/iconify/icons-react/tree/devicon): **Devicon** (1057 icons, MIT)
- [#devicon-plain](https://github.com/iconify/icons-react/tree/devicon-plain): **Devicon Plain** (771 icons, MIT)
- [#catppuccin](https://github.com/iconify/icons-react/tree/catppuccin): **Catppuccin Icons** (656 icons, MIT)
- [#skill-icons](https://github.com/iconify/icons-react/tree/skill-icons): **Skill Icons** (400 icons, MIT)
- [#gcp](https://github.com/iconify/icons-react/tree/gcp): **Google Cloud Icons** (214 icons, Apache 2.0)
- [#k8s](https://github.com/iconify/icons-react/tree/k8s): **Kubernetes Icons** (38 icons, Apache 2.0)
- [#unjs](https://github.com/iconify/icons-react/tree/unjs): **UnJS Logos** (63 icons, Apache 2.0)

### Logos

- [#simple-icons](https://github.com/iconify/icons-react/tree/simple-icons): **Simple Icons** (3461 icons, CC0 1.0)
- [#logos](https://github.com/iconify/icons-react/tree/logos): **SVG Logos** (1935 icons, CC0)
- [#streamline-logos](https://github.com/iconify/icons-react/tree/streamline-logos): **Logos free icons** (1362 icons, CC BY 4.0)
- [#cib](https://github.com/iconify/icons-react/tree/cib): **CoreUI Brands** (830 icons, CC0 1.0)
- [#fa7-brands](https://github.com/iconify/icons-react/tree/fa7-brands): **Font Awesome Brands** (608 icons, CC BY 4.0)
- [#bxl](https://github.com/iconify/icons-react/tree/bxl): **Boxicons Brands** (295 icons, MIT)
- [#nonicons](https://github.com/iconify/icons-react/tree/nonicons): **Nonicons** (69 icons, MIT)
- [#arcticons](https://github.com/iconify/icons-react/tree/arcticons): **Arcticons** (15322 icons, CC BY-SA 4.0)
- [#thesvg](https://github.com/iconify/icons-react/tree/thesvg): **theSVG** (3755 icons, MIT)
- [#thesvg-color](https://github.com/iconify/icons-react/tree/thesvg-color): **theSVG Color** (4896 icons, MIT)
- [#selfhst](https://github.com/iconify/icons-react/tree/selfhst): **selfh.st/icons** (7203 icons, CC BY 4.0)
- [#cbi](https://github.com/iconify/icons-react/tree/cbi): **Custom Brand Icons** (1737 icons, CC BY-NC-SA 4.0)
- [#brandico](https://github.com/iconify/icons-react/tree/brandico): **Brandico** (45 icons, CC BY SA)
- [#entypo-social](https://github.com/iconify/icons-react/tree/entypo-social): **Entypo+ Social** (76 icons, CC BY-SA 4.0)
- [#token](https://github.com/iconify/icons-react/tree/token): **Web3 Icons** (1786 icons, MIT)
- [#token-branded](https://github.com/iconify/icons-react/tree/token-branded): **Web3 Icons Branded** (4081 icons, MIT)
- [#cryptocurrency](https://github.com/iconify/icons-react/tree/cryptocurrency): **Cryptocurrency Icons** (483 icons, CC0 1.0)
- [#cryptocurrency-color](https://github.com/iconify/icons-react/tree/cryptocurrency-color): **Cryptocurrency Color Icons** (483 icons, CC0 1.0)

### Emoji

- [#openmoji](https://github.com/iconify/icons-react/tree/openmoji): **OpenMoji** (4544 icons, CC BY-SA 4.0)
- [#twemoji](https://github.com/iconify/icons-react/tree/twemoji): **Twitter Emoji** (3988 icons, CC BY 4.0)
- [#noto](https://github.com/iconify/icons-react/tree/noto): **Noto Emoji** (3729 icons, Apache 2.0)
- [#fluent-emoji-flat](https://github.com/iconify/icons-react/tree/fluent-emoji-flat): **Fluent Emoji Flat** (3145 icons, MIT)
- [#fluent-emoji-high-contrast](https://github.com/iconify/icons-react/tree/fluent-emoji-high-contrast): **Fluent Emoji High Contrast** (1595 icons, MIT)
- [#noto-v1](https://github.com/iconify/icons-react/tree/noto-v1): **Noto Emoji (v1)** (2162 icons, Apache 2.0)
- [#emojione](https://github.com/iconify/icons-react/tree/emojione): **Emoji One (Colored)** (1834 icons, CC BY 4.0)
- [#emojione-monotone](https://github.com/iconify/icons-react/tree/emojione-monotone): **Emoji One (Monotone)** (1403 icons, CC BY 4.0)
- [#emojione-v1](https://github.com/iconify/icons-react/tree/emojione-v1): **Emoji One (v1)** (1262 icons, CC BY-SA 4.0)
- [#fxemoji](https://github.com/iconify/icons-react/tree/fxemoji): **Firefox OS Emoji** (1034 icons, Apache 2.0)
- [#streamline-emojis](https://github.com/iconify/icons-react/tree/streamline-emojis): **Streamline Emojis** (787 icons, CC BY 4.0)

### Flags / Maps

- [#circle-flags](https://github.com/iconify/icons-react/tree/circle-flags): **Circle Flags** (439 icons, MIT)
- [#flag](https://github.com/iconify/icons-react/tree/flag): **Flag Icons** (542 icons, MIT)
- [#flagpack](https://github.com/iconify/icons-react/tree/flagpack): **Flagpack** (254 icons, MIT)
- [#cif](https://github.com/iconify/icons-react/tree/cif): **CoreUI Flags** (199 icons, CC0 1.0)
- [#pinhead](https://github.com/iconify/icons-react/tree/pinhead): **Pinhead Map Icons** (2727 icons, CC0)
- [#roentgen](https://github.com/iconify/icons-react/tree/roentgen): **Röntgen** (574 icons, CC BY 4.0)
- [#maki](https://github.com/iconify/icons-react/tree/maki): **Maki** (215 icons, CC0)
- [#temaki](https://github.com/iconify/icons-react/tree/temaki): **Temaki** (557 icons, CC0)
- [#gis](https://github.com/iconify/icons-react/tree/gis): **Font-GIS** (367 icons, CC BY 4.0)
- [#map](https://github.com/iconify/icons-react/tree/map): **Map Icons** (167 icons, Open Font License)
- [#geo](https://github.com/iconify/icons-react/tree/geo): **GeoGlyphs** (30 icons, MIT)
- [#osmic](https://github.com/iconify/icons-react/tree/osmic): **OSM Icons** (169 icons, CC0 1.0)

### Thematic

- [#game-icons](https://github.com/iconify/icons-react/tree/game-icons): **Game Icons** (4133 icons, CC BY 3.0)
- [#fad](https://github.com/iconify/icons-react/tree/fad): **FontAudio** (155 icons, CC BY 4.0)
- [#academicons](https://github.com/iconify/icons-react/tree/academicons): **Academicons** (158 icons, Open Font License)
- [#wi](https://github.com/iconify/icons-react/tree/wi): **Weather Icons** (219 icons, Open Font License)
- [#meteocons](https://github.com/iconify/icons-react/tree/meteocons): **Meteocons** (447 icons, MIT)
- [#healthicons](https://github.com/iconify/icons-react/tree/healthicons): **Health Icons** (2042 icons, MIT)
- [#medical-icon](https://github.com/iconify/icons-react/tree/medical-icon): **Medical Icons** (144 icons, MIT)
- [#covid](https://github.com/iconify/icons-react/tree/covid): **Covid Icons** (142 icons, CC BY 4.0)
- [#ginetex](https://github.com/iconify/icons-react/tree/ginetex): **Ginetex Care Symbols** (50 icons, MIT)

### Archive / Unmaintained

- [#la](https://github.com/iconify/icons-react/tree/la): **Line Awesome** (1544 icons, Apache 2.0)
- [#eva](https://github.com/iconify/icons-react/tree/eva): **Eva Icons** (490 icons, MIT)
- [#dashicons](https://github.com/iconify/icons-react/tree/dashicons): **Dashicons** (342 icons, GPL)
- [#flat-color-icons](https://github.com/iconify/icons-react/tree/flat-color-icons): **Flat Color Icons** (329 icons, MIT)
- [#entypo](https://github.com/iconify/icons-react/tree/entypo): **Entypo+** (321 icons, CC BY-SA 4.0)
- [#foundation](https://github.com/iconify/icons-react/tree/foundation): **Foundation** (283 icons, MIT)
- [#raphael](https://github.com/iconify/icons-react/tree/raphael): **Raphael** (266 icons, MIT)
- [#icons8](https://github.com/iconify/icons-react/tree/icons8): **Icons8 Windows 10 Icons** (234 icons, MIT)
- [#iwwa](https://github.com/iconify/icons-react/tree/iwwa): **Innowatio Font** (105 icons, Apache 2.0)
- [#gala](https://github.com/iconify/icons-react/tree/gala): **Gala Icons** (51 icons, GPL)
- [#heroicons-outline](https://github.com/iconify/icons-react/tree/heroicons-outline): **HeroIcons v1 Outline** (230 icons, MIT)
- [#heroicons-solid](https://github.com/iconify/icons-react/tree/heroicons-solid): **HeroIcons v1 Solid** (230 icons, MIT)
- [#fa6-solid](https://github.com/iconify/icons-react/tree/fa6-solid): **Font Awesome 6 Solid** (1402 icons, CC BY 4.0)
- [#fa6-regular](https://github.com/iconify/icons-react/tree/fa6-regular): **Font Awesome 6 Regular** (163 icons, CC BY 4.0)
- [#fa6-brands](https://github.com/iconify/icons-react/tree/fa6-brands): **Font Awesome 6 Brands** (495 icons, CC BY 4.0)
- [#fa-solid](https://github.com/iconify/icons-react/tree/fa-solid): **Font Awesome 5 Solid** (1001 icons, CC BY 4.0)
- [#fa-regular](https://github.com/iconify/icons-react/tree/fa-regular): **Font Awesome 5 Regular** (151 icons, CC BY 4.0)
- [#fa-brands](https://github.com/iconify/icons-react/tree/fa-brands): **Font Awesome 5 Brands** (457 icons, CC BY 4.0)
- [#fa](https://github.com/iconify/icons-react/tree/fa): **Font Awesome 4** (678 icons, Open Font License)
- [#fluent-mdl2](https://github.com/iconify/icons-react/tree/fluent-mdl2): **Fluent UI MDL2** (1735 icons, MIT)
- [#fontisto](https://github.com/iconify/icons-react/tree/fontisto): **Fontisto** (615 icons, MIT)
- [#icomoon-free](https://github.com/iconify/icons-react/tree/icomoon-free): **IcoMoon Free** (491 icons, GPL)
- [#subway](https://github.com/iconify/icons-react/tree/subway): **Subway Icon Set** (306 icons, CC BY 4.0)
- [#oi](https://github.com/iconify/icons-react/tree/oi): **Open Iconic** (223 icons, MIT)
- [#wpf](https://github.com/iconify/icons-react/tree/wpf): **Icons8 Windows 8 Icons** (200 icons, MIT)
- [#simple-line-icons](https://github.com/iconify/icons-react/tree/simple-line-icons): **Simple line icons** (189 icons, MIT)
- [#et](https://github.com/iconify/icons-react/tree/et): **Elegant** (100 icons, GPL 3.0)
- [#el](https://github.com/iconify/icons-react/tree/el): **Elusive Icons** (304 icons, Open Font License)
- [#vaadin](https://github.com/iconify/icons-react/tree/vaadin): **Vaadin Icons** (636 icons, Apache 2.0)
- [#grommet-icons](https://github.com/iconify/icons-react/tree/grommet-icons): **Grommet Icons** (636 icons, Apache 2.0)

Total: 222 icon sets, 369841 icons.
