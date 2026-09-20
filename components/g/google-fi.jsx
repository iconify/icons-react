import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuy4aefsy.css';
import '../../css/n/nq4nrmb_c.css';
import '../../css/n/nrjclnbmq.css';
import '../../css/s/syu6jl27a.css';
import '../../css/g/gkhe7qbis.css';
import '../../css/z/z5qox7thd.css';
import '../../css/d/di5meih6v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="yuy4aefsy"/><path class="nq4nrmb_c"/><circle class="nrjclnbmq"/><path class="syu6jl27a"/><circle class="gkhe7qbis"/><path class="z5qox7thd"/><circle class="di5meih6v"/>`,
		"fallback": "selfhst:google-fi",
	});
}

export default Component;
