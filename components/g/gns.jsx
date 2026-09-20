import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8n3guxzd.css';
import '../../css/i/i6o7bob-u.css';
import '../../css/r/rqbxhyegq.css';
import '../../css/k/kcxdw0blf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8n3guxzd"/><path class="i6o7bob-u"/><path class="rqbxhyegq"/><path clip-rule="evenodd" class="kcxdw0blf"/>`,
		"fallback": "token:gns",
	});
}

export default Component;
