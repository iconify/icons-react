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
		"content": `<style>.orlzkzb3k {
  fill: currentColor;
  d: path("M5 21v-4.173q1.414-1.027 2.459-2.402t1.695-2.983H6.846v-1h2.012L6.96 7.192L12 2.02l5.039 5.173l-1.897 3.25h1.992v1h-2.307q.67 1.608 1.714 2.983Q17.587 15.8 19 16.827V21zm7.52-13.364q.21-.21.21-.52t-.21-.52q-.209-.211-.52-.211t-.52.21t-.21.52t.21.52q.209.211.52.211t.52-.21");
}
</style><path class="orlzkzb3k"/>`,
		"fallback": "material-symbols-light:chess-bishop-sharp",
	});
}

export default Component;
