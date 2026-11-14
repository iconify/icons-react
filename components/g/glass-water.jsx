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
		"content": `<style>.jr7ateb2t {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.072 4.25H7.928q-1.107 0-1.851.82q-.744.819-.638 1.921l1.162 12q.219 2.259 2.488 2.259h5.822q2.269 0 2.489-2.259l1.16-12q.107-1.102-.637-1.921q-.744-.82-1.851-.82m-3.686 6.107q2.132 1.279 4.505-.015q.131-.072.279-.088t.292.026t.259.136t.187.225q.036.065.058.135t.03.144t.001.147t-.027.145q-.021.07-.056.136q-.034.065-.08.123q-.047.057-.103.105q-.057.047-.122.082q-3.127 1.706-5.995-.015q-2.132-1.279-4.505.015q-.131.072-.279.088t-.292-.026q-.143-.043-.259-.136t-.187-.225q-.036-.065-.058-.135t-.03-.144t-.001-.147t.027-.145q.021-.07.056-.136q.034-.065.08-.123q.047-.057.103-.105q.057-.047.122-.082q3.127-1.706 5.995.015");
}
</style><path class="jr7ateb2t"/>`,
		"fallback": "uix-solid:glass-water",
	});
}

export default Component;
