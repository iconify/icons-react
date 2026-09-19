import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mjrax6bpk.css';
import '../../css/t/t0jvufb3s.css';
import '../../css/k/k2efj8s9w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOz4JIehK"><g class="ft5dv1b6b"><path clip-rule="evenodd" class="mjrax6bpk"/><path class="t0jvufb3s"/><path class="k2efj8s9w"/></g></mask></defs><path mask="url(#SVGOz4JIehK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:germs",
	});
}

export default Component;
