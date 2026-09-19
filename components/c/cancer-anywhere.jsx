import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gzttocb0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.032 41.654C16.02 36.9 21.006 28.677 22.31 17.827c.559-4.643-.968-10.551-5.493-11.395c-3.737-.697-6.53 3.009-7.32 6.573c-1.592 7.195 1.074 15.76 9.179 23.295c5.087 4.73 11.759 6.545 22.292 4.299");
}
</style><path class="gzttocb0p"/>`,
		"fallback": "arcticons:cancer-anywhere",
	});
}

export default Component;
