import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_1j10-np.css';
import '../../css/r/r2nonpb-r.css';
import '../../css/l/lhyk42bxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_1j10-np wm-a"/><path class="r2nonpb-r wm-a"/><path class="lhyk42bxl wm-a"/>`,
		"fallback": "withicons-bauhaus:brain",
	});
}

export default Component;
