import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xak_phb-k.css';
import '../../css/w/w7pe5sbbm.css';
import '../../css/r/r1ulr9b3o.css';
import '../../css/d/d7u_dlrgo.css';
import '../../css/s/sco082b7w.css';

const viewBox = {"width":366.08,"height":298.83,"left":-3.29,"top":29.96};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xak_phb-k"/><path class="w7pe5sbbm"/><path class="r1ulr9b3o"/><path class="d7u_dlrgo"/><path class="sco082b7w"/>`,
		"fallback": "thesvg-color:in-toto-light",
	});
}

export default Component;
