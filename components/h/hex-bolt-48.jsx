import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdykscxue.css';
import '../../css/s/sm0cfybmw.css';
import '../../css/e/euxfqgbhs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdykscxue"/><path class="sm0cfybmw"/><path class="euxfqgbhs"/>`,
		"fallback": "energy-icons:hex-bolt-48",
	});
}

export default Component;
