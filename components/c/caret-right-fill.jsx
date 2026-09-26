import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.imzag9cmd {
  d: path("M17.7413 12.456L6.7841 18.9273C6.43652 19.1326 6 18.8787 6 18.4713L6 5.52868C6 5.12126 6.43651 4.86742 6.7841 5.0727L17.7413 11.544C18.0862 11.7477 18.0862 12.2523 17.7413 12.456Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t0zzyvbgp {
  fill: currentColor;
  d: path("M17.7413 12.456L6.7841 18.9273C6.43652 19.1326 6 18.8787 6 18.4713L6 5.52868C6 5.12126 6.43651 4.86742 6.7841 5.0727L17.7413 11.544C18.0862 11.7477 18.0862 12.2523 17.7413 12.456Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="t0zzyvbgp"/><path class="imzag9cmd"/></g>`,
		"fallback": "keyline-icons:caret-right-fill",
	});
}

export default Component;
