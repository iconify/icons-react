import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":257};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dx-hhbboe {
  d: path("M165.072.159c4.435 0 7.99 3.606 8.413 8.02c3.782 39.376 35.118 70.713 74.495 74.494c4.414.424 8.02 3.979 8.02 8.413v74.145c0 4.435-3.606 7.99-8.02 8.413c-39.377 3.782-70.713 35.118-74.495 74.494c-.424 4.415-3.978 8.02-8.413 8.02H90.928c-4.435 0-7.99-3.605-8.413-8.02c-3.782-39.376-35.118-70.712-74.494-74.494C3.606 173.22 0 169.666 0 165.231V91.086c0-4.434 3.606-7.989 8.02-8.413C47.398 78.892 78.734 47.555 82.516 8.18C82.94 3.765 86.493.16 90.928.16zM51.4 127.942c0 42.594 34.49 77.123 77.037 77.123c42.546 0 77.037-34.529 77.037-77.123s-34.49-77.124-77.037-77.124c-42.546 0-77.037 34.53-77.037 77.124");
}
</style><path class="dx-hhbboe"/>`,
		"fallback": "logos:fal-icon",
	});
}

export default Component;
