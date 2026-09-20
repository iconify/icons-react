import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdzeqvbsh.css';
import '../../css/w/wey4svb0n.css';
import '../../css/l/loj74m4-w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<radialGradient id="SVGPdYnWdnb" cx="664.523" cy="1737.48" r="35.49" gradientTransform="rotate(135 7171.4 7566.021)scale(10.217 10.2033)" gradientUnits="userSpaceOnUse"><stop offset="0" class="qdzeqvbsh"/><stop offset="1" class="wey4svb0n"/></radialGradient><path fill="url(#SVGPdYnWdnb)" class="loj74m4-w"/>`,
		"fallback": "selfhst:freedombox",
	});
}

export default Component;
