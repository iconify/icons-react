import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.isxwr5bwd {
  fill: currentColor;
  d: path("M3.75 6a.75.75 0 0 1 .75.75v14.5a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 3.75 6m20.5 0a.75.75 0 0 1 .75.75v14.5a.75.75 0 0 1-1.5 0V6.75a.75.75 0 0 1 .75-.75m-7.78 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25l-.056.052a.75.75 0 0 1-1.056-1.056l.052-.056l1.97-1.97H9.56l1.97 1.97a.75.75 0 1 1-1.06 1.06l-3.25-3.25l-.052-.056a.75.75 0 0 1 .052-1.004l3.25-3.25l.056-.052a.75.75 0 0 1 1.056 1.056l-.052.056l-1.97 1.97h8.88l-1.97-1.97a.75.75 0 0 1 0-1.06");
}
</style><path class="isxwr5bwd"/>`,
		"fallback": "fluent:auto-fit-width-28-regular",
	});
}

export default Component;
