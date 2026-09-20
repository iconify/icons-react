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
		"content": `<style>.mx7m2bcyk {
  fill: currentColor;
  d: path("M24.001 14.5a5.25 5.25 0 1 0 0-10.5a5.25 5.25 0 0 0 0 10.5M11.71 10.258a4.25 4.25 0 0 0-2.907 7.987l7.872 2.865a.5.5 0 0 1 .329.47v4.438c0 .353-.068.703-.2 1.03l-4.49 11.112a4.25 4.25 0 1 0 7.882 3.184l1.229-3.04A13 13 0 0 1 21 35c0-6.149 4.269-11.3 10.005-12.653v-.768a.5.5 0 0 1 .329-.47l7.872-2.864a4.25 4.25 0 1 0-2.908-7.988l-3.812 1.388c-.82.298-1.422.896-1.805 1.544a7.75 7.75 0 0 1-6.677 3.81a7.75 7.75 0 0 1-6.677-3.81c-.384-.648-.986-1.246-1.806-1.544zM45 35c0 6.075-4.925 11-11 11s-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11m-4.293-4.707a1 1 0 0 0-1.414 0L32 37.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414");
}
</style><path class="mx7m2bcyk"/>`,
		"fallback": "fluent:accessibility-checkmark-48-filled",
	});
}

export default Component;
