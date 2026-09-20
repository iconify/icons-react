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
		"content": `<style>.vwx59zzfc {
  d: path("M16.011 2L30 16c-2.7 0-5.394.005-8.09 0v8.112c-1.96 1.965-3.928 3.922-5.885 5.888L2 16.008ZM10.12 16.008l5.889 5.892V16c1.96 0 3.92.005 5.88 0c-1.949-1.973-3.92-3.925-5.878-5.888q-2.947 2.946-5.891 5.896");
}
</style><path class="vwx59zzfc"/>`,
		"fallback": "vscode-icons:file-type-light-gamemaker2",
	});
}

export default Component;
