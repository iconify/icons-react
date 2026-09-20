import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bugzh_bbr {
  fill: var(--svg-color--c7d302, #c7d302);
  d: path("M16.2 10.5h3.12v.72H16.2zm0 3.85h3.12v12.84H16.2z");
}

.f00f3jewy {
  fill: var(--svg-color--009fe3, #009fe3);
  d: path("M12.12 10.5h3.12v.72h-3.12zm0 3.85h3.12V30h-3.12z");
}

.lzi6lbcpq {
  fill: var(--svg-color--df2815, #df2815);
  d: path("M24.24 10.5h3.12v.72h-3.12zm0 3.85h3.12v5.28h-3.12z");
}

.ri5qr-b1h {
  fill: var(--svg-color--0084bf, #0084bf);
  d: path("M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z");
}

.tjhac_ktc {
  fill: var(--svg-color--f07e16, #f07e16);
  d: path("M20.23 10.5h3.12v.72h-3.12zm0 3.85h3.12v8.57h-3.12z");
}

.zz71464kh {
  fill: var(--svg-color--696969, #696969);
  d: path("M11.99 12.04H27.5a.77.77 0 1 1 0 1.52H11.99a.77.77 0 0 1 0-1.52");
}
</style><path class="ri5qr-b1h"/><path class="zz71464kh"/><path class="f00f3jewy"/><path class="bugzh_bbr"/><path class="tjhac_ktc"/><path class="lzi6lbcpq"/>`,
		"fallback": "vscode-icons:folder-type-pytest",
	});
}

export default Component;
