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
		"content": `<style>.as05xn5qq {
  fill: currentColor;
  d: path("M22.687 4.3a1.25 1.25 0 0 1 1.627.001l5.247 4.5a1.25 1.25 0 0 1-1.628 1.898l-3.183-2.73v9.781a1.25 1.25 0 1 1-2.5 0V7.966l-3.188 2.73a1.25 1.25 0 1 1-1.626-1.9zm2.063 35.73l3.184-2.726a1.25 1.25 0 1 1 1.626 1.9L24.31 43.7c-.468.4-1.159.4-1.627-.001l-5.247-4.5a1.25 1.25 0 0 1 1.628-1.898l3.187 2.734V30.25a1.25 1.25 0 1 1 2.5 0zM7 23.75c0-.69.56-1.25 1.25-1.25h31.5a1.25 1.25 0 1 1 0 2.5H8.25C7.56 25 7 24.44 7 23.75");
}
</style><path class="as05xn5qq"/>`,
		"fallback": "fluent:arrow-maximize-vertical-48-regular",
	});
}

export default Component;
