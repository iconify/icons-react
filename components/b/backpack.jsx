import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jarc6s6ki.css';
import '../../css/s/sh9y-3b-t.css';
import '../../css/a/anpv6btnk.css';
import '../../css/j/jxw8_1b8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jarc6s6ki wm-k"/><path class="sh9y-3b-t wm-k"/><path class="anpv6btnk wm-a"/><path class="jxw8_1b8y wm-a"/>`,
		"fallback": "withicons-bauhaus:backpack",
	});
}

export default Component;
