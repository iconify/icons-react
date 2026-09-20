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
		"content": `<style>.u3p9_zbpy {
  fill: currentColor;
  d: path("M10.25 3.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5m3.5-1.5h-3.5a2.25 2.25 0 0 0-2.236 2H6.25A2.25 2.25 0 0 0 4 6.25v13.5A2.25 2.25 0 0 0 6.25 22h4.919a1.75 1.75 0 0 1-.016-1.465l1.55-3.463l.03-.071l2.67-5.966a1.75 1.75 0 0 1 3.194 0L20 14.171V6.25A2.25 2.25 0 0 0 17.75 4h-1.764a2.25 2.25 0 0 0-2.236-2m3.935 9.444a.75.75 0 0 0-1.37 0l-2.677 5.985l-.014.03l-1.559 3.485a.75.75 0 1 0 1.37.612l1.367-3.056h4.396l1.367 3.056a.75.75 0 1 0 1.37-.612l-1.56-3.485l-.013-.03zM17 13.587L18.527 17h-3.054z");
}
</style><path class="u3p9_zbpy"/>`,
		"fallback": "fluent:clipboard-letter-24-filled",
	});
}

export default Component;
