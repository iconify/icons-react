import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe2_ycbjb.css';
import '../../css/f/ft_gti1us.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe2_ycbjb"/><path class="ft_gti1us"/>`,
		"fallback": "selfhst:documenso",
	});
}

export default Component;
