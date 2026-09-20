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
		"content": `<style>.szzl-xr0d {
  fill: currentColor;
  d: path("M5 21v-4.173q1.414-1.027 2.459-2.402t1.695-2.983H6.846v-1h2.012L6.96 7.192L12 2.02l5.039 5.173l-1.897 3.25h1.992v1h-2.307q.67 1.608 1.714 2.983Q17.587 15.8 19 16.827V21zm1-1h12v-2.577q-1.446-1.2-2.518-2.7t-1.684-3.28h-3.59q-.612 1.76-1.69 3.26q-1.08 1.5-2.518 2.7zm4.01-9.558h3.961l1.792-3.104L12 3.422L8.236 7.34zm2.51-2.806q.21-.21.21-.52t-.21-.52q-.209-.212-.52-.212t-.52.21q-.21.21-.21.52t.21.522q.209.21.52.21t.52-.21M12 3.421");
}
</style><path class="szzl-xr0d"/>`,
		"fallback": "material-symbols-light:chess-bishop-outline-sharp",
	});
}

export default Component;
