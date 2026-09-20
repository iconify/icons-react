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
		"content": `<style>.bko76hbpa {
  fill: currentColor;
  d: path("M12.816 2.318a4.5 4.5 0 0 1 6.364 0l10.499 10.5a4.5 4.5 0 0 1 0 6.363l-10.499 10.5a4.5 4.5 0 0 1-6.364 0L2.318 19.18a4.5 4.5 0 0 1 0-6.364zm5.391 6.476a1 1 0 1 0-1.414 1.414L18.586 12H16.5a4.5 4.5 0 0 0-4.5 4.5V21a1 1 0 0 0 2 0v-4.5a2.5 2.5 0 0 1 2.5-2.5h2.086l-1.793 1.793a1 1 0 0 0 1.414 1.414l3.5-3.5a1 1 0 0 0 0-1.414z");
}
</style><path class="bko76hbpa"/>`,
		"fallback": "fluent:directions-32-filled",
	});
}

export default Component;
