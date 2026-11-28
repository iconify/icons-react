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
		"content": `<style>.en3j34bdi {
  d: path("M18.992 7.2487L21.557 11.4317C21.847 11.9036 22 12.4464 22 13M22 13V17C22 18.6569 20.657 20 19 20H5C3.343 20 2 18.6569 2 17V13M22 13H16L14 16H10L8 13H2M2 13C2 12.4464 2.153 11.9036 2.443 11.4317L5.008 7.2487M12 11V4M15 7L12 4L9 7");
}

.is9md867t {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2 13H8L10 16H14L16 13H22V17C22 18.6569 20.657 20 19 20H5C3.343 20 2 18.6569 2 17V13Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="is9md867t"/><path class="en3j34bdi"/></g>`,
		"fallback": "keyline-icons:inbox-arrow-up-fill",
	});
}

export default Component;
