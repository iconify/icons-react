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
		"content": `<style>.md_wd5oxf {
  fill: var(--svg-color--020041, #020041);
  d: path("M14.647 8.728L12 4.058l-2.647 4.67v6.258a4.72 4.72 0 0 1 3.335-1.398c.694 0 1.36.159 1.959.44zm1.588 2.806v8.407H21zm-1.588 8.407h-5.03a3.441 3.441 0 0 1 5.03-4.225zm-6.882 0H3l4.765-8.407z");
}
</style><path class="md_wd5oxf"/>`,
		"fallback": "token-branded:ach",
	});
}

export default Component;
