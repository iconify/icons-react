import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw0njuuzd.css';
import '../../css/r/rssdfuhft.css';
import '../../css/y/ywin52edh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw0njuuzd"/><path class="rssdfuhft"/><path class="ywin52edh"/>`,
		"fallback": "devicon:doctrine-wordmark",
	});
}

export default Component;
