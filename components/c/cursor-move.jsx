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
		"content": `<style>.p960_gbjm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m10.292 3.341l-.36.421q-.756.88-.271 1.934q.473 1.029 1.59 1.053v4.501H6.749q-.024-1.117-1.053-1.59q-1.054-.485-1.934.271l-.421.36v.001q-.786.673-.786 1.708t.786 1.708l.421.361q.88.756 1.934.271q1.029-.474 1.053-1.59h4.501v4.501q-1.117.024-1.59 1.053q-.485 1.054.271 1.934l.36.421h.001q.673.786 1.708.786t1.708-.786l.361-.421q.756-.88.271-1.934q-.474-1.029-1.59-1.053V12.75h4.501q.024 1.116 1.053 1.59q1.054.485 1.934-.271l.421-.361q.786-.673.786-1.708t-.786-1.708v-.001l-.421-.36q-.88-.756-1.934-.271q-1.029.473-1.053 1.59H12.75V6.749q1.116-.024 1.59-1.053q.485-1.054-.271-1.934l-.361-.421q-.673-.786-1.708-.786t-1.708.786");
}
</style><path class="p960_gbjm"/>`,
		"fallback": "uix-solid:cursor-move",
	});
}

export default Component;
