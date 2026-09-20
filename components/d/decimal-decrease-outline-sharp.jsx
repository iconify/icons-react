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
		"content": `<style>.ord60lbji {
  fill: currentColor;
  d: path("M15.27 20.789L11.98 17.5l3.29-3.288l.707.688l-2.075 2.1h6.81v1h-6.81l2.075 2.1zM4.25 12.827v-1.692h1.692v1.692zm3.88-.805q-.803-.806-.803-1.945v-4q0-1.14.806-1.945t1.946-.805t1.944.805t.804 1.945v4q0 1.14-.806 1.945t-1.946.805t-1.944-.805m3.182-.705q.514-.511.514-1.24v-4q0-.73-.514-1.24q-.515-.51-1.236-.51t-1.236.51q-.514.51-.514 1.24v4q0 .729.514 1.24q.515.51 1.236.51t1.236-.51");
}
</style><path class="ord60lbji"/>`,
		"fallback": "material-symbols-light:decimal-decrease-outline-sharp",
	});
}

export default Component;
