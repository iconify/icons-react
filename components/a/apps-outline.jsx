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
		"content": `<style>.zs9n2n88n {
  fill: currentColor;
  d: path("M5.126 18.874q-.357-.357-.357-.874t.357-.874t.874-.357t.874.357t.357.874t-.357.874t-.874.357t-.874-.357m6 0q-.357-.357-.357-.874t.357-.874t.874-.357t.874.357t.357.874t-.357.874t-.874.357t-.874-.357m6 0q-.357-.357-.357-.874t.357-.874t.874-.357t.874.357t.357.874t-.357.874t-.874.357t-.874-.357m-12-6q-.357-.357-.357-.874t.357-.874t.874-.357t.874.357t.357.874t-.357.874t-.874.357t-.874-.357m6 0q-.357-.357-.357-.874t.357-.874t.874-.357t.874.357t.357.874t-.357.874t-.874.357t-.874-.357m6 0q-.357-.357-.357-.874t.357-.874t.874-.357t.874.357t.357.874t-.357.874t-.874.357t-.874-.357m-12-6Q4.769 6.517 4.769 6t.357-.874T6 4.769t.874.357t.357.874t-.357.874T6 7.231t-.874-.357m6 0q-.357-.357-.357-.874t.357-.874t.874-.357t.874.357t.357.874t-.357.874t-.874.357t-.874-.357m6 0q-.357-.357-.357-.874t.357-.874t.874-.357t.874.357t.357.874t-.357.874t-.874.357t-.874-.357");
}
</style><path class="zs9n2n88n"/>`,
		"fallback": "material-symbols-light:apps-outline",
	});
}

export default Component;
