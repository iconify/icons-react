import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.foayfgx4b {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6a5.5 5.5 0 0 1-.393-1H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3.207q.524.149 1 .393V6a3 3 0 0 0-3-3zm3.5 7h1.837c.895-.63 1.986-1 3.163-1h-5a.5.5 0 0 0 0 1m-4-5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm1 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z");
}
</style><path class="foayfgx4b"/>`,
		"fallback": "fluent:form-new-20-regular",
	});
}

export default Component;
