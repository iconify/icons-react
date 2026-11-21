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
		"content": `<style>.ahhqo1b4s {
  d: path("M1.7071 1.7071L22.2929 22.2929");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.i68b6nb4q {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.2906 10.2906L13.7094 13.7094L8.5811 15.4189ZM15.2906 15.2906L19.7782 19.7782C17.7876 21.7688 15.0376 23 12 23C5.9249 23 1 18.0751 1 12C1 8.9624 2.2312 6.2124 4.2218 4.2218L8.7094 8.7094L8.5513 9.1838L6.0513 16.6838C5.9315 17.0431 6.0251 17.4393 6.2929 17.7071C6.5607 17.9749 6.9569 18.0685 7.3162 17.9487L14.8162 15.4487ZM6.3532 2.558C8.0038 1.5687 9.9355 1 12 1C18.0753 1 23 5.9247 23 12C23 14.0645 22.4313 15.9962 21.442 17.6468Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="i68b6nb4q"/><path class="ahhqo1b4s"/></g>`,
		"fallback": "keyline-icons:compass-off-sharp-fill",
	});
}

export default Component;
