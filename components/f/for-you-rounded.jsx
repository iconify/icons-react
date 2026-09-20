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
		"content": `<style>.vs_f7rbog {
  fill: currentColor;
  d: path("M15.135 12.17q1.606-.214 3.048-.65q.384-.143.716.115q.332.257.332.667v6.477q0 .337-.19.599q-.189.263-.495.372q-1.54.533-3.206.815q-1.667.281-3.34.281t-3.34-.281t-3.206-.815q-.306-.11-.495-.372q-.19-.262-.19-.6v-6.476q0-.41.332-.667t.716-.116q1.442.437 3.048.651t3.135.214t3.135-.214m-.849-8.072q.945.944.945 2.286t-.945 2.287T12 9.616T9.714 8.67t-.945-2.286t.944-2.287T12 3.154t2.286.944");
}
</style><path class="vs_f7rbog"/>`,
		"fallback": "material-symbols-light:for-you-rounded",
	});
}

export default Component;
