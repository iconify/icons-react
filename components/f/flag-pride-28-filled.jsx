import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bcq2jkbmw {
  fill: var(--svg-color--ffd23e, #FFD23E);
  d: path("M5 10h18v1H5z");
}

.ft5dv1b6b {
  fill: none;
}

.fyvsb2btw {
  d: path("M4.75 3a.75.75 0 0 0-.75.75v20.5a.75.75 0 0 0 1.5 0V18h17.75a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75H4.75zm.75 1.5h17v12h-17v-12z");
  fill: var(--svg-color--212121, #212121);
}

.gcxb8zzri {
  fill: var(--svg-color--745125, #745125);
  d: path("M5 4.25h18V6H5z");
}

.jyeqdj6qb {
  fill: var(--svg-color--61bc51, #61BC51);
  d: path("M5 11h18v2H5z");
}

.myg-2-bgy {
  fill: var(--svg-color--f36d38, #F36D38);
  d: path("M5 8h18v2H5z");
}

.r55g9somi {
  fill: var(--svg-color--1793e8, #1793E8);
  d: path("M5 13h18v2H5z");
}

.sm6unbckm {
  fill: var(--svg-color--b73fbb, #B73FBB);
  d: path("M5 15h18v2H5z");
}

.x9orew_mi {
  fill: var(--svg-color--e62c46, #E62C46);
  d: path("M5 6h18v2H5z");
}
</style><g class="ft5dv1b6b"><path class="gcxb8zzri"/><path class="x9orew_mi"/><path class="myg-2-bgy"/><path class="bcq2jkbmw"/><path class="jyeqdj6qb"/><path class="r55g9somi"/><path class="sm6unbckm"/><path class="fyvsb2btw"/></g>`,
		"fallback": "fluent:flag-pride-28-filled",
	});
}

export default Component;
