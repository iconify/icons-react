import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/n/n_g2ks.css';
import '../../css/j/j5x9vw.css';
import '../../css/z/z28l-c.css';
import '../../css/t/tv0bue.css';
import '../../css/s/so-from-16.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c n_g2ks"/><path class="a0m25c j5x9vw"/><path class="a0m25c z28l-c"/><path class="a0m25c tv0bue"/>`,
		"fallback": "line-md:align-left",
	});
}

export default Component;
