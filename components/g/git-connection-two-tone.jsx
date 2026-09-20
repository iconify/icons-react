import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bz2v9tb7f.css';
import '../../css/l/lq-vfcc-t.css';
import '../../css/d/dsqq6boqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bz2v9tb7f"/><path class="lq-vfcc-t"/><path class="dsqq6boqn"/></g>`,
		"fallback": "keyline-icons:git-connection-two-tone",
	});
}

export default Component;
