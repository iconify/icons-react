import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h44oajipe.css';
import '../../css/e/ezdj7qokr.css';
import '../../css/a/a__iqxtux.css';
import '../../css/m/mxgtmybcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="h44oajipe"/><path class="ezdj7qokr wm-k"/><path class="a__iqxtux wm-k"/><path class="mxgtmybcd wm-a"/></g>`,
		"fallback": "withicons:avatar-monster-fluffy-sketch",
	});
}

export default Component;
