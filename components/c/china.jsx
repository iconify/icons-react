import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnnw6covj.css';
import '../../css/r/rh07anbcy.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnnw6covj"/><path class="rh07anbcy"/><path class="snp287xku"/>`,
		"fallback": "streamline-emojis:china",
	});
}

export default Component;
