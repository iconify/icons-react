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
		"content": `<style>.nd9hvccbc {
  fill: currentColor;
  d: path("m12.061 12.647l-1.354-1.354a2.415 2.415 0 0 0-3.414 0L2 16.586V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1h-8c-.411 0-.789.264-.939.647M15 10a2 2 0 1 0 .001-3.999A2 2 0 0 0 15 10m-5.707 2.707l2.414 2.414a1 1 0 0 0 .293.203V21a1 1 0 0 1-1 1H5a3 3 0 0 1-2.984-2.683a1 1 0 0 0 .277-.196l6.414-6.414a.414.414 0 0 1 .586 0M15 16h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2");
}
</style><path class="nd9hvccbc"/>`,
		"fallback": "coolicons:image-minus-corner-fill",
	});
}

export default Component;
