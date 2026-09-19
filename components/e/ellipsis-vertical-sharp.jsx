import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7d-ndb_c.css';
import '../../css/n/nulljp8ek.css';
import '../../css/a/a3p68ebjt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="q7d-ndb_c"/><circle class="nulljp8ek"/><circle class="a3p68ebjt"/>`,
		"fallback": "ion:ellipsis-vertical-sharp",
	});
}

export default Component;
