import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hbq6nfbve {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13.273 7.25h-2.546q-.216-3.375-2.477-3.375T5.773 7.25H4q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141Q3.25 7.926 3.25 8q0 .031.003.062l1 12Q4.398 22.25 6.5 22.25h11q2.102 0 2.248-2.2l.999-11.988q.013-.148-.033-.29q-.045-.143-.141-.256q-.097-.114-.229-.183q-.133-.068-.282-.08q-.031-.003-.062-.003h-1.773q-.216-3.375-2.477-3.375T13.273 7.25M8.25 5.375q-.845 0-.976 1.875h1.952q-.131-1.875-.976-1.875m6.524 1.875q.131-1.875.976-1.875t.976 1.875zM7.75 18.5q0-3.311 2.22-5.53q2.219-2.22 5.53-2.22q.074 0 .146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146q0 3.311-2.22 5.53q-2.219 2.22-5.53 2.22q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146");
}
</style><path class="hbq6nfbve"/>`,
		"fallback": "uix-solid:garden-waste-sack",
	});
}

export default Component;
