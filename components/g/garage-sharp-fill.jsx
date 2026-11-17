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
		"content": `<style>.b80qhjaia {
  d: path("M11.66 1.06C11.916 0.967 12.201 0.982 12.447 1.105L22.236 6H1.764L11.553 1.105L11.66 1.06Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.m7w2w9bav {
  fill-rule: evenodd;
  d: path("M23 22C23 22.552 22.552 23 22 23H2C1.448 23 1 22.552 1 22V8H23V22ZM6 21H18V11H6V21Z");
}

.vu44_nb2f {
  d: path("M14 19H10V17H14V19Z");
}
</style><g class="cuyn6tgcc"><path class="vu44_nb2f"/><path clip-rule="evenodd" class="m7w2w9bav"/><path class="b80qhjaia"/></g>`,
		"fallback": "keyline-icons:garage-sharp-fill",
	});
}

export default Component;
