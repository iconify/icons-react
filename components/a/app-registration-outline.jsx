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
		"content": `<style>.r1hq4_bvx {
  fill: currentColor;
  d: path("M5.126 18.874q-.357-.357-.357-.874t.357-.874t.874-.357t.874.357t.357.874t-.357.874t-.874.357t-.874-.357m0-6q-.357-.357-.357-.874t.357-.874t.874-.357t.874.357t.357.874t-.357.874t-.874.357t-.874-.357m0-6Q4.769 6.517 4.769 6t.357-.874T6 4.769t.874.357t.357.874t-.357.874T6 7.231t-.874-.357m6 0q-.357-.357-.357-.874t.357-.874t.874-.357t.874.357t.357.874t-.357.874t-.874.357t-.874-.357m6 0q-.357-.357-.357-.874t.357-.874t.874-.357t.874.357t.357.874t-.357.874t-.874.357t-.874-.357m-6 6q-.357-.357-.357-.874t.357-.874t.874-.357t.874.357t.357.874t-.357.874t-.874.357t-.874-.357m2.105 6.357v-2.21l5.333-5.307q.148-.148.307-.2q.16-.052.32-.052q.165 0 .334.064t.298.193l.925.945q.123.148.187.307q.065.16.065.32q0 .159-.062.322t-.19.31l-5.308 5.308zm6.885-5.94l-.925-.945zm-6 5.055h.95l3.467-3.473l-.47-.475l-.455-.489l-3.492 3.487zm3.948-3.948l-.456-.489l.925.964z");
}
</style><path class="r1hq4_bvx"/>`,
		"fallback": "material-symbols-light:app-registration-outline",
	});
}

export default Component;
