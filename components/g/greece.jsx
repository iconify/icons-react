import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7x5h9bzy.css';
import '../../css/a/a0r-u0reb.css';
import '../../css/n/n3d6wfb5m.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7x5h9bzy"/><path class="a0r-u0reb"/><path class="n3d6wfb5m"/><path class="snp287xku"/>`,
		"fallback": "streamline-emojis:greece",
	});
}

export default Component;
