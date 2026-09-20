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
		"content": `<style>.qbso1dj-a {
  fill: var(--svg-color--39207c, #39207c);
  d: path("M15.969 30C9.415 29.973 2 26.44 2 26.44C2.427 9.574 14.919 2.592 15.965 2.037V2l.035.02l.035-.02v.04C17.081 2.6 29.573 9.578 30 26.443c0 0-7.463 3.557-14.031 3.557");
}

.udo14tbzo {
  fill: var(--svg-color--f7f7f7, #f7f7f7);
  d: path("M17.8 23.1c.638.353.567 1.343.567 1.343c-6.024.919-7.512-7.706-7.512-7.706a.9.9 0 0 1-1.346-.353c2.338-5.994 10.417-2.757 10.417-2.757c-.443-.585.921-1.038.921-1.038C24.815 17.439 17.8 23.1 17.8 23.1");
}
</style><path class="qbso1dj-a"/><path class="udo14tbzo"/>`,
		"fallback": "vscode-icons:file-type-meson",
	});
}

export default Component;
