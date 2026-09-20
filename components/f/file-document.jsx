import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/s/sgi08m.css';
import '../../css/y/y4wbml.css';
import '../../css/p/pciifw.css';
import '../../css/f/fhjy5e.css';
import '../../css/o/oyeo5a.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-_-jasl.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew sgi08m y4wbml"/><path class="iw1iew pciifw"/><path class="fhjy5e iw1iew y4wbml"/><path class="iw1iew oyeo5a y4wbml"/>`,
		"fallback": "line-md:file-document",
	});
}

export default Component;
