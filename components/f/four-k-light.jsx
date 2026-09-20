import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u52tz-bqe {
  fill: currentColor;
  d: path("M26 48a6 6 0 0 1 6-6h192a6 6 0 0 1 0 12H32a6 6 0 0 1-6-6m198 154H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12M144 74a6 6 0 0 0-6 6v96a6 6 0 0 0 12 0v-29.75l15.42-17.62l29.4 50.37a6 6 0 0 0 5.19 3a5.9 5.9 0 0 0 3-.82a6 6 0 0 0 2.16-8.2l-31.41-53.88L204.52 84a6 6 0 0 0-9-7.9L150 128V80a6 6 0 0 0-6-6M90 176v-18H40a6 6 0 0 1-4.74-9.68l56-72A6 6 0 0 1 102 80v66h10a6 6 0 0 1 0 12h-10v18a6 6 0 0 1-12 0m0-30V97.49L52.27 146Z");
}
</style><path class="u52tz-bqe"/>`,
		"fallback": "ph:four-k-light",
	});
}

export default Component;
