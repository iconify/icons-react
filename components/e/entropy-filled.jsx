import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwyb6n-0h.css';
import '../../css/q/qo15eky2l.css';
import '../../css/f/fr80xwbvq.css';
import '../../css/y/yi3v55ama.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="lwyb6n-0h"/><circle class="qo15eky2l"/><circle class="fr80xwbvq"/><circle class="yi3v55ama"/>`,
		"fallback": "bitcoin-icons:entropy-filled",
	});
}

export default Component;
