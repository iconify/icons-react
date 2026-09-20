import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1xy6nh9u.css';
import '../../css/t/toljrtdpg.css';
import '../../css/r/rpxe9ibnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="n1xy6nh9u"/><circle class="toljrtdpg"/><circle class="rpxe9ibnu"/>`,
		"fallback": "uim:ellipsis-v",
	});
}

export default Component;
