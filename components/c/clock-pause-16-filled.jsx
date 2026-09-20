import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v57-iw8_h {
  fill: currentColor;
  d: path("M4.5 7a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9M3 9a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4A.5.5 0 0 0 3 9m3 0a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4A.5.5 0 0 0 6 9m3-9a7 7 0 0 1 .404 13.987c.38-.747.596-1.591.596-2.487c0-1.33-.472-2.549-1.258-3.5H11.5a.5.5 0 0 0 0-1H9V3.5a.5.5 0 0 0-1 0v3.757A5.48 5.48 0 0 0 4.5 6a5.5 5.5 0 0 0-2.488.595A7 7 0 0 1 9 0");
}
</style><path class="v57-iw8_h"/>`,
		"fallback": "fluent:clock-pause-16-filled",
	});
}

export default Component;
