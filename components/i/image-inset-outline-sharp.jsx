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
		"content": `<style>.tvd_3wbjo {
  fill: currentColor;
  d: path("M6.385 15.616h11.23V8.385H6.386zm2.23-1.885l1.799-2.402l1.163 1.555l1.587-2.115l2.22 2.962zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="tvd_3wbjo"/>`,
		"fallback": "material-symbols-light:image-inset-outline-sharp",
	});
}

export default Component;
