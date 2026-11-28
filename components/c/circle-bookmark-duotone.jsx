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
		"content": `<style>.euycknhiy {
  d: path("M8.129 8.613C8.129 7.812 8.779 7.162 9.581 7.162H14.419C15.221 7.162 15.871 7.812 15.871 8.613V16.354C15.871 16.737 15.447 16.968 15.125 16.761L12.392 15.315C12.153 15.161 11.847 15.161 11.608 15.315L8.875 16.761C8.553 16.968 8.129 16.737 8.129 16.354V8.613Z");
}

.jb3959bwr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="jb3959bwr"/><path class="euycknhiy"/></g>`,
		"fallback": "keyline-icons:circle-bookmark-duotone",
	});
}

export default Component;
