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
		"content": `<style>.rdfhfmbbz {
  fill: var(--svg-color--e01920, #e01920);
  d: path("M9 5.25h1.5v3c0 4-.945 9.405-7.5 10.5v-2c1.5-.25 5.985-2 5.985-8.5zm2 0h2v13.5h-2zm4 0h-1.5v3c0 4 .945 9.405 7.5 10.5v-2c-1.5-.25-5.985-2-5.985-8.5z");
}
</style><path class="rdfhfmbbz"/>`,
		"fallback": "token-branded:atri",
	});
}

export default Component;
