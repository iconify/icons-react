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
		"content": `<style>.d2kllqb2l {
  fill: currentColor;
  d: path("M8.5 21.52v-1h7v1zm3.54-15.212q.327 0 .548-.222q.22-.222.22-.549t-.222-.548t-.549-.22t-.548.222t-.22.549t.222.547t.549.22M6.808 18V2h10.384v3.723h.731v2.9h-.73V18z");
}
</style><path class="d2kllqb2l"/>`,
		"fallback": "material-symbols-light:dock-sharp",
	});
}

export default Component;
